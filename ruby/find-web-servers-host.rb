#Not working
require 'rubygems'
require 'spidr'

puts "Enter URI :"
uri = gets()
servers = Set[]

Spidr.host(uri) do |spider|
  spider.all_headers do |headers|
    servers << headers['server']
  end
end
