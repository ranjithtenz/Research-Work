require 'rubygems'
require 'spidr'

puts "Enter URI :"
uri = gets()
Spidr.host(uri) do |spider|
  spider.every_missing_page do |page|
    spider.skip_page!
  end
end
