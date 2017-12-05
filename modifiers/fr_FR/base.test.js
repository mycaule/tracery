import test from 'ava'

const lang = require('./base')

test('isFeminine', t => {
  t.true(typeof lang.isFeminine === 'function')
  t.is(lang.isFeminine('machin'), false)
  t.is(lang.isFeminine('vallée'), true)
  t.is(lang.isFeminine('fée'), true)
  t.is(lang.isFeminine('allée'), true)
  t.is(lang.isFeminine('amitié'), true)
  t.is(lang.isFeminine('liberté'), true)
  t.is(lang.isFeminine('beauté'), true)
  t.is(lang.isFeminine('volonté'), true)

  t.is(lang.isFeminine('travail'), false)
  t.is(lang.isFeminine('gouvernail'), false)
  t.is(lang.isFeminine('chandail'), false)
  t.is(lang.isFeminine('éventail'), false)

  t.is(lang.isFeminine('médaille'), true)
  t.is(lang.isFeminine('taille'), true)
  t.is(lang.isFeminine('ferraille'), true)
  t.is(lang.isFeminine('maille'), true)
  t.is(lang.isFeminine('volaille'), true)

  t.is(lang.isFeminine('orteil'), false)
  t.is(lang.isFeminine('soleil'), false)
  t.is(lang.isFeminine('appareil'), false)
  t.is(lang.isFeminine('conseil'), false)
  t.is(lang.isFeminine('sommeil'), false)
  t.is(lang.isFeminine('vermeil'), false)

  t.is(lang.isFeminine('corbeille'), true)
  t.is(lang.isFeminine('abeille'), true)
  t.is(lang.isFeminine('bouteille'), true)
  t.is(lang.isFeminine('oreille'), true)

  t.is(lang.isFeminine('fauteuil'), false)
  t.is(lang.isFeminine('écureuil'), false)
  t.is(lang.isFeminine('seuil'), false)
  t.is(lang.isFeminine('bouvreuil'), false)
  t.is(lang.isFeminine('chevreuil'), false)

  t.is(lang.isFeminine('chèvrefeuille'), false)
  t.is(lang.isFeminine('millefeuille'), false)
  t.is(lang.isFeminine('portefeuille'), false)

  t.is(lang.isFeminine('accueil'), false)
  t.is(lang.isFeminine('cercueil'), false)
  t.is(lang.isFeminine('orgueil'), false)
  t.is(lang.isFeminine('recueil'), false)

  t.is(lang.isFeminine('pomme'), true)
  t.is(lang.isFeminine('chienne'), true)
})

test('femininize', t => {
  t.true(typeof lang.femininize === 'function')
  t.is(lang.femininize('donné'), 'donnée')
  t.is(lang.femininize('pris'), 'prise')
})

test('-le-', t => {
  t.true(typeof lang.le === 'function')
  t.is(lang.le('chèvrefeuille'), 'le chèvrefeuille')
  t.is(lang.le('abeille'), 'l\'abeille')
  t.is(lang.le('pomme'), 'la pomme')
})

test('-un-', t => {
  t.true(typeof lang.le === 'function')
  t.is(lang.un('écureuil'), 'un écureuil')
  t.is(lang.un('oreille'), 'une oreille')
  t.is(lang.un('chienne'), 'une chienne')
})
