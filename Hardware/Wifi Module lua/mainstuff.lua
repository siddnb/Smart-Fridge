print("I've been launched!")
uart.write(0, "I've been launched!\n")
idied = 0

-- -- Set up the data to be sent in the POST request


websocket = require'websocket'
url = 'ws://192.168.156.102:443/' --3000
client = websocket.createClient()




--Send Backend Connected
--local json_payload = '{"id":"backend", "data":"Backend Connected"}'
client:on("connection", function()
    --client:send(json_payload)
    print("connected")
    gpio.mode(3, gpio.OUTPUT)
    gpio.write(3, gpio.LOW)
    
end)

client:connect(url)



function a() 
-- Make the HTTP POST request

 

  uart.write(0, "eyy\n")


  http.post('http://192.168.137.42:3000/api/ingredients',
    'Content-Type: text/plain\r\n',
    "helloxd",
    function(code, data)
      if (code < 0) then
        print("HTTP request failed")
      else
        print(code, data)
      end
    end)
    
end

table = {}

function sendPOST1() 
  -- Make the HTTP POST request

  bigStr = ""

  bigStr = table[0]

  for i = 1, #table do
    bigStr = bigStr .. table[i] -- concatenate each string in the array
  end
  
  --print(bigStr) -- print the resulting big string

  
  client:send(bigStr)

  client:on("receive", function(_, msg, opcode)
      print(msg)
  end)

  client:on("close", function(_, status)
      -- client2 = websocket.createClient()
      -- client2:connect(url)
      -- client2:on("connection", function()
      --   --client:send(json_payload)
      --   --print(bigStr)
      --   client2:send(bigStr)
      -- end)
      idied = 1
      client = websocket.createClient()
      client:connect(url)

      client:on("connection", function()
          if(idied == 1) then
            client:send(bigStr)
          end
      end)
      
      
  end)

end
