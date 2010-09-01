require 'rubygems'
require 'spidr'

puts "Enter URI :"
uri = gets()
spider = Spidr.host(uri) do |spider|
  spider.every_forbidden_page do |page|
    spider.pause!
  end
end
