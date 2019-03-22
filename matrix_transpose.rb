def matrix_transpose(array)
    result = Array.new(array[0].length) { Array.new(array.length) {0}}
    row = 0
    while row < array.length 
        col = 0
        while col < array[col].length 
            result[col][row] = array[row][col]
            col += 1
        end
        row += 1
    end
    return result
end

# def matrix_transpose(a) 
#   # result = Array.new(a[0].length) { Array.new(a.length) {0} }
#   result = Array.new(a[0].length) {Array.new(a.length) {1}}
#   row = 0
#   while row < a.length
#     col = 0 
#     while col < a[0].length
#       result[col][row] = a[row][col]
#       col += 1
#     end
#     row += 1
#   end
#   return result
# end

# puts matrix_transpose([[1,2,3],[4,5,6],[7,8,9]])
puts matrix_transpose([[1,2,3],[4,5,6]])  ##[[1,4],[2,5],[3,6]]