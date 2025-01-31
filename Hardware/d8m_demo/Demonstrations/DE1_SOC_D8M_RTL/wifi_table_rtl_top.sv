module wifi_table_rtl_top(
	input 		  logic        		CLOCK_50,

	//////////// SEG7 //////////
	output		logic     [6:0]		HEX0,
	output		 logic    [6:0]		HEX1,
	output		logic     [6:0]		HEX2,
	output		logic     [6:0]		HEX3,
	output		logic     [6:0]		HEX4,
	output		logic     [6:0]		HEX5,

	//////////// KEY //////////
	input 		logic     [3:0]		KEY,

	//////////// LED //////////
	output		logic     [9:0]		LEDR,

	//////////// SW //////////
	input 		logic     [9:0]		SW,

	//////////// GPIO_0, GPIO_0 connect to GPIO Default //////////
	inout 		wire    [35:0]		GPIO 	
	
);

logic [7:0] data_in;
logic data_in_valid;
logic data_end;
logic data_accepted;
logic [15:0] table_number_ascii;
logic start;
logic txclk;
logic rxclk;
logic busy;
logic sendPOST;




// instantiate wifi_rtl
wifi_rtl wifi_rtl_inst(
    .CLOCK_50(CLOCK_50),
    .data_in(data_in),
    .data_in_valid(data_in_valid),
    .data_end(data_end),
    .data_accepted(data_accepted),
    .table_number_ascii(table_number_ascii),
    .reset(reset),
    .start(start),
    .GPIO(GPIO),
    .txclk(txclk),
    .rxclk(rxclk),
    .increment_table_number(increment_table_number),
    .sendPOST(sendPOST)
);


logic [7:0] i;

logic [7:0] table_number;


enum {Rst, Write, SendPOSTstate, Finished, actuallyFinished} state;


always_ff @(posedge txclk) begin
    if(!KEY[0] || state == Rst) begin
        if(SW[8]) begin
            i <= 0;
            table_number <= 0;
            state <= Write;
        end else begin
            state <= Rst;
        end

    end else begin
        case (state)
            Write: begin
                if(i < 220) begin
                    state <= Write;
                    if(data_accepted) begin
                        i <= i + 1;
                    end
                    if(increment_table_number) begin
                        table_number <= table_number + 1;
                    end
                end else begin
                    state <= Finished;
                end
            end
            SendPOSTstate: begin
                if(data_accepted) begin
                    state <= actuallyFinished;
                end else begin
                    state <= SendPOSTstate;
                end
            end
            
            Finished: begin
                state <= SendPOSTstate;
            end
            actuallyFinished: begin
                state <= actuallyFinished;
            end
        endcase
    end
    

end

always_comb begin
    case (state)
        Rst: begin
            data_in = 0;
            data_in_valid = 0;
            data_end = 0;
            start = 0;
            LEDR = 10'b0000000001;
            sendPOST = 0;
        end
        Write: begin
            data_in = 8'h46;
            data_in_valid = 1;
            data_end = 0;
            start = 1;
            LEDR = 10'b0000000010;
            sendPOST = 0;
        end
        SendPOSTstate: begin
            data_in = 0;
            data_in_valid = 1;
            data_end = 0;
            start = 1;
            LEDR = 10'b0000001000;
            sendPOST = 1;
        end
        Finished: begin
            data_in = 0;
            data_in_valid = 0;
            data_end = 1;
            start = 0;
            LEDR = 10'b0000000100;
            sendPOST = 0;
        end
        actuallyFinished: begin
            data_in = 0;
            data_in_valid = 0;
            data_end = 0;
            start = 0;
            LEDR = 10'b0000010000;
            sendPOST = 0;
        end
    endcase
end


always_comb begin
    case (table_number)
        8'd0: table_number_ascii = 16'h3030;
        8'd1: table_number_ascii = 16'h3031;
        8'd2: table_number_ascii = 16'h3032;
        8'd3: table_number_ascii = 16'h3033;
        8'd4: table_number_ascii = 16'h3034;
        8'd5: table_number_ascii = 16'h3035;
        8'd6: table_number_ascii = 16'h3036;
        8'd7: table_number_ascii = 16'h3037;
        8'd8: table_number_ascii = 16'h3038;
        8'd9: table_number_ascii = 16'h3039;
        8'd10: table_number_ascii = 16'h3130;
        8'd11: table_number_ascii = 16'h3131;
        8'd12: table_number_ascii = 16'h3132;
        8'd13: table_number_ascii = 16'h3133;
        8'd14: table_number_ascii = 16'h3134;
        8'd15: table_number_ascii = 16'h3135;
        8'd16: table_number_ascii = 16'h3136;
        8'd17: table_number_ascii = 16'h3137;
        8'd18: table_number_ascii = 16'h3138;
        8'd19: table_number_ascii = 16'h3139;
        8'd20: table_number_ascii = 16'h3230;
        default: table_number_ascii = 16'h3030;
    endcase
end




endmodule