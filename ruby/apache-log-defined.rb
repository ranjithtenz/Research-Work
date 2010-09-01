require 'rubygems'
require 'apachelogregex'
require 'set'
require 'pp'

urls = Set.new
format = '%h %l %u %t \"%r\" %>s %b \"%{Referer}i\" \"%{User-Agent}\"'
  parser = ApacheLogRegex.new(format)
  File.readlines('aleurier_access.log').collect do |line|
  @line = parser.parse(line)
   urls.add(@line["%h"])
      # {"%r"=>"GET /blog/index.xml HTTP/1.1", "%h"=>"87.18.183.252", ... }
end
puts urls
pp @line