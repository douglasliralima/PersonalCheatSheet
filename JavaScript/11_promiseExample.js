function login(req, res, callback) {
  // Uma promise é um "objeto" que promete que vai um dia pegar aquele resultado e quando pegar
  // ele executará o "callback" passado no then, o negócio é que podemos fazer isso encadeado
  // Assim podemos ter promises que vão depender de outras promises e assim por diante
  // pegando tudo com um único erro se em algum lugar dessa corrente der bosta
  // O parametro do then é o retorno da promise
  User.findOne({email: req.body.email})
    .then(function(user) {
      return user.comparePassword(req.body.password)
    })
    .then(function(isMatch) {
      // have to throw in order to break Promise chain
      if (!isMatch) {
        res.status(401).send('Incorrect password')
        throw {earlyExit: true}
      }
      const payload = {id: user._id, email: user.email}
      return jwt.sign(payload, config.secret, {})
    })
    .then(function(token) {
      user.token = token
      return user.save()
    })
    .then(function() {
      res.json({token})
    })
    .catch(function(err) {
      if (!err.earlyExit) callback(err)
    })
}
