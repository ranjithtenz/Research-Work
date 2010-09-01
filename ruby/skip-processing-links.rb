require 'rubygems'
require 'spidr'

puts "Enter URI :"
uri = gets()
Spidr.host(uri) do |spider|
  spider.every_url do |url|
    if url.path.split('/').find { |dir| dir.to_i > 1000 }
      spider.skip_link!
    end
  end
end
