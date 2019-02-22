# you can write to stdout for debugging purposes, e.g.
# puts "this is a debug message"

def to_integer(s)
  num = 0
  i = s.length - 1
  while i >= 0
    if s[i] == "1"
      num += 2 ** (s.length - 1 - i)
    end
    i -= 1 
  end
  return num
end

def solution(s)
  num = to_integer(s)
  counter = 0
  while num > 0
    if num.even? 
      num /= 2
      counter += 1
    elsif num.odd?
      num -= 1
      counter += 1
    end
  end
  return counter
end


  
  

# solution("011100")
solution("011100")