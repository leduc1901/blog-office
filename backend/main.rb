arr = [1 , 3 , 5 , 2 , 4 , 7 , 9 ,8]
def sort(arr)
    (arr.length - 1).times do |i|
        (arr.length - i - 1).times do |j|
            if arr[j] > arr[j+1]
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            end 
        end
    end
end
sort(arr)
puts arr