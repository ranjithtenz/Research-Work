#No outputs
require 'rubygems'
require 'spidr'

Spidr.start_at(
  'http://company.com/',
  :hosts => [
    'company.com',
    /host\d\.company\.com/
  ]
)
