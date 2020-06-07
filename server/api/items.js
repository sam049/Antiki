const router = require('express').Router()
const Item = require('../db/models/items')

router.get('/', async (req, res, next) => {
  try {
    const items = await Item.findAll()
    res.json(items)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    if (!req.body) {
      res.sendStatus(400)
    }
    const newItem = await Item.create(req.body)
    res.json(newItem)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id)
    if (!item) {
      res.sendStatus(404)
    } else {
      res.json(item)
    }
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const targetItem = await Item.findByPk(req.params.id)
    if (targetItem) {
      const updatedItem = await targetItem.update(req.body)
      res.statusCode(202).json(updatedItem)
    } else {
      res.statusCode(404).send('Page Not Found')
    }
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    await Item.destroy({
      where: {
        id: req.params.id
      }
    })
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

module.exports = router
