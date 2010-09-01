require 'rubygems'
require 'spidr'

puts "Enter URI :"
uri = gets()
Spidr.site(uri) do |spider|
  spider.every_html_page do |page|
    puts page.title
  end
end
