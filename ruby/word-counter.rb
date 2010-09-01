
the_file='aleurier_access.log'
h = Hash.new
f = File.open(the_file, "r")
f.each_line { |line|
  words = line.split
  words.each { |w|
    if h.has_key?(w)
      h[w] = h[w] +1
    else
      puts h[w] = 1
    end
  }
}

# sort the hash by value, and then print it in this sorted order
h.sort{|a,b| a[1]<=>b[1]}.each { |elem|
  puts "\"#{elem[0]}\""
}
