def solution(a, b)
  n = a.length
  m = b.length
  a = a.sort
  b = b.sort
  i = 0
  for k in 0 .. n - 1
    if i < m - 1 and b[i] < a[k]
      i += 1 until i == m - 1 || b[i] >= a[k]
    end
    if a[k] == b[i]
      return a[k]
    end
  end
  return -1
end

# solution([1,3,2,1], [4,2,5,3,2])
# solution([2,1], [3,3])
solution([1,2,5,6,7,10], [3,8,9,10,7,1])