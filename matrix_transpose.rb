def matrix_transpose(array)
    result = Array.new(array[0].length) { Array.new(array.lenght) {0}}
    row = 0
    while row < array[0].length 
        col = 0
        while col < array.length 
            result[col][row] = array[row][col]
            col += 1
        end
        row += 1
    end
    return result
end