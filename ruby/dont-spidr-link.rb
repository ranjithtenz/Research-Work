require 'rubygems'
require 'spidr'

puts "Enter URI :"
uri = gets()
Spidr.site(uri, :ignore_links => [/log/])
