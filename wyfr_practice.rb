def solution(a)
  counter = 1
  a = a.sort
  puts a
  i = 0
  while i < a.length
    if a[i] == counter
      counter += 1
    end
    i += 1
  end
  # while true
  #   return counter if !(a.include?(counter))
  return counter
  # end
end

solution([1, 3, 6, 4, 1, 2])