//code taken and modified from https://github.com/hell03end/verilog-uart/blob/master/uart/

/*
 * 8-bit UART Transmitter.
 * Able to transmit 8 bits of serial data, one start bit, one stop bit.
 * When transmit is complete {done} is driven high for one clock cycle.
 * When transmit is in progress {busy} is driven high.
 * Clock should be decreased to baud rate.
 */
module Uart8Transmitter (
    input  logic       clk,   // baud rate
    input  logic       en,
    input  logic       start, // start of transaction
    input  logic [7:0] in,    // data to transmit
    output logic        out,   // tx
    output logic        done,  // end on transaction
    output logic        busy   // transaction is in process
);
    // reg [2:0] state  = `RESET;
    logic [7:0] data; // to store a copy of input data
    //logic [2:0] bitIdx = 3'b0; // for 8-bit data
    logic [7:0] idx; // for 8-bit data
    logic [7:0] waitcount;

    enum {RESET,IDLE, START_BIT, DATA_BITS, STOP_BIT1, STOP_BIT2} state;
    

    always_ff @(posedge clk) begin
        case (state)
            IDLE       : begin
                // out     <= 1'b1; // drive line high for idle
                // done    <= 1'b0;
                // busy    <= 1'b0;
                idx  <= 8'd0;
                waitcount <= 8'd0;
                if (start & en) begin
                    data    <= in; // save a copy of input data
                    state   <= START_BIT;
                    //busy    <= 1'b1;
                end
            end
            START_BIT  : begin
                state   <= DATA_BITS;
            end
            DATA_BITS  : begin // Wait 8 clock cycles for data bits to be sent
                if (idx < 8'd7) begin
                    idx  <= idx + 8'd1;
                end else begin
                    state <= STOP_BIT1;
                end
            end
            STOP_BIT1   : begin // Send out Stop bit (high)
                data    <= 8'b0;
                idx  <= 8'd0;
                if(waitcount < 8'd7) begin
                    waitcount <= waitcount + 8'd1;
                end else begin
                    state   <= STOP_BIT2;
                end
            end
            STOP_BIT2   : begin // Send out Stop bit (high)
                state   <= IDLE;
            end
            default     : begin
                state   <= IDLE;
            end
        endcase
    end

    always_comb begin
        case (state)
            IDLE       : begin
                out = 1'b1;// drive line high for idle
                done = 1'b1;
                busy = 1'b0;
            end
            START_BIT  : begin
                out = 1'b0; // send start bit (low)
                done = 1'b0;
                busy = 1'b1;
            end
            DATA_BITS  : begin
                out = data[idx];
                done = 1'b0;
                busy = 1'b1;
            end
            STOP_BIT1   : begin
                out = 1'b1; // Send out Stop bit (high)
                done = 1'b0;
                busy = 1'b1;
            end
            STOP_BIT2  : begin
                out = 1'b1; // Send out Stop bit (high)
                done = 1'b0;
                busy = 1'b1;
            end
            default     : begin
                out = 1'b1; // drive line high for idle
                done = 1'b0;
                busy = 1'b0;
            end
        endcase
    end

endmodule



// /*
//  * 8-bit UART Receiver.
//  * Able to receive 8 bits of serial data, one start bit, one stop bit.
//  * When receive is complete {done} is driven high for one clock cycle.
//  * Output data should be taken away by a few clocks or can be lost.
//  * When receive is in progress {busy} is driven high.
//  * Clock should be decreased to baud rate.
//  */
// module Uart8Receiver (
//     input  wire       clk,  // baud rate
//     input  wire       en,
//     input  wire       in,   // rx
//     output reg  [7:0] out,  // received data
//     output reg        done, // end on transaction
//     output reg        busy, // transaction is in process
//     output reg        err   // error while receiving data
// );
//     // states of state machine
//     reg [1:0] RESET = 2'b00;
//     reg [1:0] IDLE = 2'b01;
//     reg [1:0] DATA_BITS = 2'b10;
//     reg [1:0] STOP_BIT = 2'b11;

//     reg [2:0] state;
//     reg [2:0] bitIdx = 3'b0; // for 8-bit data
//     reg [1:0] inputSw = 2'b0; // shift reg for input signal state
//     reg [3:0] clockCount = 4'b0; // count clocks for 16x oversample
//     reg [7:0] receivedData = 8'b0; // temporary storage for input data

//     initial begin
//         out <= 8'b0;
//         err <= 1'b0;
//         done <= 1'b0;
//         busy <= 1'b0;
//     end

//     always @(posedge clk) begin
//         inputSw = { inputSw[0], in };

//         if (!en) begin
//             state = RESET;
//         end

//         case (state)
//             RESET: begin
//                 out <= 8'b0;
//                 err <= 1'b0;
//                 done <= 1'b0;
//                 busy <= 1'b0;
//                 bitIdx <= 3'b0;
//                 clockCount <= 4'b0;
//                 receivedData <= 8'b0;
//                 if (en) begin
//                     state <= IDLE;
//                 end
//             end

//             IDLE: begin
//                 done <= 1'b0;
//                 if (&clockCount) begin
//                     state <= DATA_BITS;
//                     out <= 8'b0;
//                     bitIdx <= 3'b0;
//                     clockCount <= 4'b0;
//                     receivedData <= 8'b0;
//                     busy <= 1'b1;
//                     err <= 1'b0;
//                 end else if (!(&inputSw) || |clockCount) begin
//                     // Check bit to make sure it's still low
//                     if (&inputSw) begin
//                         err <= 1'b1;
//                         state <= RESET;
//                     end
//                     clockCount <= clockCount + 4'b1;
//                 end
//             end

//             // Wait 8 full cycles to receive serial data
//             DATA_BITS: begin
//                 if (&clockCount) begin // save one bit of received data
//                     clockCount <= 4'b0;
//                     // TODO: check the most popular value
//                     receivedData[bitIdx] <= inputSw[0];
//                     if (&bitIdx) begin
//                         bitIdx <= 3'b0;
//                         state <= STOP_BIT;
//                     end else begin
//                         bitIdx <= bitIdx + 3'b1;
//                     end
//                 end else begin
//                     clockCount <= clockCount + 4'b1;
//                 end
//             end

//             /*
//             * Baud clock may not be running at exactly the same rate as the
//             * transmitter. Next start bit is allowed on at least half of stop bit.
//             */
//             STOP_BIT: begin
//                 if (&clockCount || (clockCount >= 4'h8 && !(|inputSw))) begin
//                     state <= IDLE;
//                     done <= 1'b1;
//                     busy <= 1'b0;
//                     out <= receivedData;
//                     clockCount <= 4'b0;
//                 end else begin
//                     clockCount <= clockCount + 1;
//                     // Check bit to make sure it's still high
//                     if (!(|inputSw)) begin
//                         err <= 1'b1;
//                         state <= RESET;
//                     end
//                 end
//             end

//             default: state <= IDLE;
//         endcase
//     end

// endmodule