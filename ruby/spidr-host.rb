require 'rubygems'
require 'spidr'

puts "Enter URI :"
uri = gets()
Spidr.host(uri)
