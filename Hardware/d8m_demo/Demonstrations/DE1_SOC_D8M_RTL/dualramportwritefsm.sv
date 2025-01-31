module dualramportwritefsm(



    input logic READ_Request,

    input logic [12:0] H_Cont,
    input logic [12:0] V_Cont,

    input logic [7:0] input_Red,
    input logic [7:0] input_Green,
    input logic [7:0] input_Blue,

    input logic vga_clk,

    input logic reset,

    input logic read_clk,

    output logic [23:0] output_q,

    input logic [14:0] read_address


	
);

logic [14:0] write_address;
logic ram_write_enable;



twoportram	twoportram_inst (
	.data ({input_Red, input_Green, input_Blue}),
	.rdaddress ( read_address),
	.rdclock ( read_clk),
	.wraddress (  write_address),
	.wrclock ( vga_clk),
	.wren (  ram_write_enable),
	.q (output_q)
	);


always_comb begin
    if (READ_Request) begin
        write_address = (15'd160 * ((V_Cont - 12'd44) >> 2)) + ((H_Cont - 12'd161) >> 2);
        ram_write_enable = 1'b1;
    end else begin
        write_address = 15'd0;
        ram_write_enable = 1'b0;
    end
end

// always_comb begin
//     if (READ_Request) begin
//         if((15'd160 * ((V_Cont - 12'd44))) + ((H_Cont - 12'd161) <= 15'b111111111111111)) begin
//             write_address = (15'd160 * ((V_Cont - 12'd44))) + ((H_Cont - 12'd161));
//             ram_write_enable = 1'b1;
//         end else begin
//             write_address = 15'd0;
//             ram_write_enable = 1'b0;
//         end
        
//     end else begin
//         write_address = 15'd0;
//         ram_write_enable = 1'b0;
//     end
// end


// logic [7:0] i;


// enum {Rst, Write, SendPOSTstate, Finished, actuallyFinished} state;


// always_ff @(posedge txclk) begin
//     if(!KEY[0] || state == Rst) begin
//         if(SW[8]) begin
//             i <= 0;
//             table_number <= 0;
//             state <= Write;
//         end else begin
//             state <= Rst;
//         end

//     end else begin
//         case (state)
//             Write: begin
//                 if(i < 220) begin
//                     state <= Write;
//                     if(data_accepted) begin
//                         i <= i + 1;
//                     end
//                     if(increment_table_number) begin
//                         table_number <= table_number + 1;
//                     end
//                 end else begin
//                     state <= Finished;
//                 end
//             end
//             SendPOSTstate: begin
//                 if(data_accepted) begin
//                     state <= actuallyFinished;
//                 end else begin
//                     state <= SendPOSTstate;
//                 end
//             end
            
//             Finished: begin
//                 state <= SendPOSTstate;
//             end
//             actuallyFinished: begin
//                 state <= actuallyFinished;
//             end
//         endcase
//     end
    

// end

// always_comb begin
//     case (state)
//         Rst: begin
//             data_in = 0;
//             data_in_valid = 0;
//             data_end = 0;
//             start = 0;
//             LEDR = 10'b0000000001;
//             sendPOST = 0;
//         end
//         Write: begin
//             data_in = 8'h46;
//             data_in_valid = 1;
//             data_end = 0;
//             start = 1;
//             LEDR = 10'b0000000010;
//             sendPOST = 0;
//         end
//         SendPOSTstate: begin
//             data_in = 0;
//             data_in_valid = 1;
//             data_end = 0;
//             start = 1;
//             LEDR = 10'b0000001000;
//             sendPOST = 1;
//         end
//         Finished: begin
//             data_in = 0;
//             data_in_valid = 0;
//             data_end = 1;
//             start = 0;
//             LEDR = 10'b0000000100;
//             sendPOST = 0;
//         end
//         actuallyFinished: begin
//             data_in = 0;
//             data_in_valid = 0;
//             data_end = 0;
//             start = 0;
//             LEDR = 10'b0000010000;
//             sendPOST = 0;
//         end
//     endcase
// end


// always_comb begin
//     case (table_number)
//         8'd0: table_number_ascii = 16'h3030;
//         8'd1: table_number_ascii = 16'h3031;
//         8'd2: table_number_ascii = 16'h3032;
//         8'd3: table_number_ascii = 16'h3033;
//         8'd4: table_number_ascii = 16'h3034;
//         8'd5: table_number_ascii = 16'h3035;
//         8'd6: table_number_ascii = 16'h3036;
//         8'd7: table_number_ascii = 16'h3037;
//         8'd8: table_number_ascii = 16'h3038;
//         8'd9: table_number_ascii = 16'h3039;
//         8'd10: table_number_ascii = 16'h3130;
//         8'd11: table_number_ascii = 16'h3131;
//         8'd12: table_number_ascii = 16'h3132;
//         8'd13: table_number_ascii = 16'h3133;
//         8'd14: table_number_ascii = 16'h3134;
//         8'd15: table_number_ascii = 16'h3135;
//         8'd16: table_number_ascii = 16'h3136;
//         8'd17: table_number_ascii = 16'h3137;
//         8'd18: table_number_ascii = 16'h3138;
//         8'd19: table_number_ascii = 16'h3139;
//         8'd20: table_number_ascii = 16'h3230;
//         default: table_number_ascii = 16'h3030;
//     endcase
// end




endmodule