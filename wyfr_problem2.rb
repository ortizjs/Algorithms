# you can write to stdout for debugging purposes, e.g.
# puts "this is a debug message"

def solution(a)
  result = 0
  prev = 0
  i = 0
  while i < a.length
    diff = a[i] - prev
    if diff > 0
      result += diff
    end
    prev = a[i]
    i += 1 
  end
  return result
end

# solution([1, 3, 2, 1, 2, 1, 5, 1, 3, 4, 2])
solution([5,8])
# solution([1,1,1,1,1,1,1,1,1,1])