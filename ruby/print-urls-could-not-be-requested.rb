require 'rubygems'
require 'spidr'

puts "Enter URI :"
uri = gets()
Spidr.site(uri) do |spider|
  spider.every_failed_url { |url| puts url }
end
