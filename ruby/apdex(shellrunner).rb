#!/usr/bin/env ruby

def apdex_run
  apdex = `egrep '/users/.+/edit' access.log | apdex_from_log --threshold 0.5 --time-column 11`
  puts apdex
end

apdex_run