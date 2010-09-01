require 'rubygems'
require 'spidr'

puts "Enter URI :"
uri = gets()
Spidr.start_at(uri)
