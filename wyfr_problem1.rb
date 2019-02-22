## Wayfair problem 1
def solution(_S)
    occurrences = Array.new(26, 0)

    for i in 0..(_S.length - 1)
        occurrences[(_S[i].ord - 'a'.ord)] += 1
    end

    best_char = 'a'
    best_res = occurrences[0]

    for i in 1..25
        if (occurrences[i] > best_res)
            best_char = ('a'.ord + i).chr
            best_res = occurrences[i]
        end
    end

    return best_char
end

# solution("hello")
# solution("herllopppaaatricckkzzz")
solution("")