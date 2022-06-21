<template lang="pug">
div
  h1 this should update realtime - why doesn't it? Bop! Ahh! That's better! Much better!
  h2 What about this?
  
  h3 goddamn that's fast when it's not running like, 12 instances

  button(@click="doSomething") do something

  button(@click="doSomethingElse") do something else
</template>

<script lang="ts">

  export default {
    mounted () {
      const { $hello, $cunt } = useNuxtApp()
      this.wallet = new $hello()
       this.wallet.wallet.client.requestPermissions({
          network: {
            type: 'ithacanet',
            rpcUrl: 'https://api.ithacanet.tzkt.io',
          },
        })
        .then(async () => { 
          console.log('done!')
         })
      this.other = $cunt
    },
    data: () => ({
      wallet: null,
      other: null
    }),
    methods: {
      doSomething () {
        
      },
      doSomethingElse () {
       
        //if (this.other) this.other()
      }
    }
  }
</script>
