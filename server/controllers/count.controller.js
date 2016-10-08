import Count from '../models/count'

export function getCount(req, res) {
  Count.findOne().exec((err, value) => {
    if (err) {
      res.status(500).send(err)
      return
    }
    if (value === null) {
      res.json({ value: 0 })
      return
    }
    res.json({ value: value.value })
  })
}

export function incrementCount(req, res) {
  Count.findOne().exec((err, value) => {
    if (err) {
      res.status(500).send(err)
      return
    }
    if (value === null) {
      const newCounter = new Count({ value: 1 })
      newCounter.save((innerErr, count) => {
        if (innerErr) {
          res.status(500).send(innerErr)
        }
        res.json({ value: count.value })
      })
      return
    }
    Count.findOneAndUpdate({}, { $set: { value: value.value + 1 } })
    .exec((innerErr, count) => {
      if (innerErr) {
        res.status(500).send(err)
        return
      }
      res.json({ value: count.value })
    })
  })
}
