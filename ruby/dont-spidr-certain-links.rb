require 'rubygems'
require 'spidr'

puts "Enter URI :"
uri = gets()
Spidr.site(
  uri,
  :ignore_ports => [8000, 8010, 8080]
)
