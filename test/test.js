const { assert } = require('chai');
const { default: Web3 } = require('web3');

const Decentagram = artifacts.require("Decentagram");

require('chai')
  .use(require('chai-as-promised'))
  .should()

  contract('Decentagram', ([deloyer, author, tipper]) => {
    let decentagram
    
    before(async () => {
        decentagram = await Decentagram.new()
    })
    
    describe('deployment', async() =>{
        it('deploys successfully', async() =>{
            const address = decentagram.address
            assert.notEqual(address, '0x0')
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })

        it('has a name', async() =>{
            const name = await decentagram.name()
            assert.equal(name, 'Decentragram')
        })
    })

    describe('images', async() =>{
        let result, count
        let hashing = "adbhash"
        before(async () => {
            result = await decentagram.addImage(hashing, 'welcome', {from: author})
            count = await decentagram.numCount()
        })

        it('create image', async() =>{
            assert.equal(count, 1)
            const event = result.logs[0].args
            assert.equal(event.id.toNumber(), count.toNumber(), 'id is correct')
            assert.equal(event.imageHash, hashing, 'it is correct')
            assert.equal(event.desc, 'welcome', 'it is correct')
            assert.equal(event.amount, '0', 'it is correct')
            assert.equal(event.author, author, 'it is correct')

            // Check test for empty hash field
            await decentagram.addImage('', 'welcome', {from: author}).should.be.rejected;

            // Check test for empty hash field
            await decentagram.addImage('image hashing', '', {from: author}).should.be.rejected;
        })

        //list images
        it('image list', async() =>{
            const img =  await decentagram.images(count)
            assert.equal(img.id.toNumber(), count.toNumber(), 'id is correct')
            assert.equal(img.imageHash, hashing, 'it is correct')
            assert.equal(img.desc, 'welcome', 'it is correct')
            assert.equal(img.amount, '0', 'it is correct')
            assert.equal(img.author, author, 'it is correct')
        })

        it('alllow users to tip amount', async() =>{
            let oldBalance
            oldBalance = await web3.eth.getBalance(author)
            oldBalance = new web3.utils.BN(oldBalance)

            result = await decentagram.tipAmount(count, {from: tipper, value: web3.utils.toWei('1', 'Ether')})
            const event = result.logs[0].args
            assert.equal(event.id.toNumber(), count.toNumber(), 'id is correct')
            assert.equal(event.imageHash, hashing, 'hash is correct')
            assert.equal(event.desc, 'welcome', 'it is correct')
            assert.equal(event.amount, '1000000000000000000', 'it is correct')
            assert.equal(event.author, author, 'it is correct')

            //Check the author recieve funds
            let newBalance
            newBalance = await web3.eth.getBalance(author)
            newBalance = new web3.utils.BN(newBalance)

            let tipImageOwner
            tipImageOwner = web3.utils.toWei('1','Ether')
            tipImageOwner = new web3.utils.BN(tipImageOwner)

            const expectedBalance = oldBalance.add(tipImageOwner)

            //FAILURE: Tries to tip a image that does not exist
            await decentagram.tipAmount(99, {from: tipper, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected
        })
    })

    
  })