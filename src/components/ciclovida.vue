<template>
   <div>
    <h1>{{message}}</h1>
   
   </div>

</template>


<script>
export default{
   
   data(){
       return{
       message: 'Ciclo de Vida'
       }
   },

    beforeCreate(){
        console.log("en este punto se inicia el ciclo de vida")
    },

    computed:{
        propiedadcomputada(){
            return this.message
        }
    },
    create(){
        console.log("this.message es reactivo")
        this.message="Ciclo de vida Actualizado"
    }
}

</script>