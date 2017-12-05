var submarine = require('submarine')
var options = {
  input_dir: 'md_files',
  output_dir: 'site',
  header: 'User Stories for Bears 10 Project',
}

submarine(options, function(error) {
  if (error) return console.log(error)
  console.log('everything\'s working!')
})
