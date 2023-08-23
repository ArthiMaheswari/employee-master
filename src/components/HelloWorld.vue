<template>
  <div>
    <h2>Employee Master</h2>
  <div style="margin-top: 50px;" class="container">
    
    <div style="width:40%">
      <v-card>
      <v-card-title>
        <p style="float: left;">Employee Info</p>
        <div style="float: right;cursor: pointer;" @click="editDetails()"> <v-icon  style="font-size: 20px;" icon="mdi-pencil" />
Edit</div>
      </v-card-title>
      <v-card-text >
        <v-text-field    :disabled="isDisabled" v-model="displayName" placeholder="Display Name" outlined
        dense
        hide-details
        clearable></v-text-field>
        <v-text-field    :disabled="isDisabled" v-model="loginId" placeholder="Login ID" outlined
        dense
        hide-details
        clearable></v-text-field>
        <v-text-field   :disabled="isDisabled" v-model="password" placeholder="Password" outlined
        dense
        hide-details
        clearable></v-text-field>
      </v-card-text>
      <v-card-action>
        <v-btn  class="text-none ms-4 text-white"
        color="blue-darken-4"
        rounded="0"
        variant="flat" @click="saveDetails()" :disabled="btnDisabled" style="margin-bottom: 10px;">Save</v-btn>
      </v-card-action>
    </v-card>
    </div>
    
    <div style="width:40%">
      <v-card>
      <v-card-title >
        <p style="float: left;">
          View Employee ({{ storeEmpDetails.length }})
        </p>
        <div style="float: right;width:30%;">
          <v-text-field
        density="compact"
        variant="solo"
        label="Search"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        v-model="searchValue"
       
       
      ></v-text-field>
        </div>
       
      </v-card-title>
      <v-card-text>
       <v-row  v-for="items in filteredList" :key="items.id">
        <v-col ><v-avatar>
      <v-img
        src="https://i1.wp.com/sixseasonsreview.com/wp-content/uploads/2016/10/default.png?resize=300%2C300&ssl=1"
        alt="Default image"
      ></v-img>
    </v-avatar>
</v-col>
        <v-col>{{ items.name }}</v-col>
        <v-col>
          <v-btn 
            class="text-none ms-4 text-white" 
            color="blue-darken-4" 
            rounded="0" 
            variant="flat"  
            style="float: right;width:30%;margin-bottom: 10px;" :disabled="btnViewDisabled" :key="items.id" @click="viewDetails(items)">View</v-btn>
        </v-col>
       </v-row>
     
      </v-card-text>
     
    </v-card>
    </div>
    
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      displayName:'',
      loginId:'',
      password:'',
      storeEmpDetails: [],
      isDisabled:false,
      editFlag:false,
      editEmpList:'',
      btnDisabled:false,
      btnViewDisabled:false,
      searchValue:'',
      getDetails:'',


    }
  },
  computed:{
    filteredList() {
    return this.storeEmpDetails.filter(item => item.name.includes(this.searchValue) || item.loginId.includes(this.searchValue));
  }
  },


  methods:{
    saveDetails(){
      if(this.displayName!== null && this.loginId!==null && this.password!==null && this.displayName!== '' && this.loginId!=='' && this.password!==''){
      if(!this.editFlag){
      this.storeEmpDetails.push({
        id: this.storeEmpDetails.length+1,
        name:this.displayName,
        loginId:this.loginId,
        password:this.password
      })
    }else{
      this.btnViewDisabled=false

      this.storeEmpDetails.filter((items)=>{
        if(this.editEmpList.id===items.id){
          items.name=this.displayName
          items.loginId=this.loginId
          items.password=this.password
        }
      })
    }
      this.filteredList=this.storeEmpDetails
   
  }
    this.editEmpList=''
      this.displayName=null
      this.loginId=null
      this.password=null
    },
    viewDetails(itemsData){
      this.editEmpList=itemsData
      this.isDisabled=true
      this.btnDisabled=true
      this.storeEmpDetails.filter((items)=>{
        if(items.id===itemsData.id){
          this.displayName=items.name
          this.loginId=items.loginId
          this.password=items.password

        }
      }) 
    },
    editDetails(){
      if(this.storeEmpDetails.length!==0 && this.displayName!==''){
      this.isDisabled=false
      this.editFlag=true
      this.btnDisabled=false
      this.btnViewDisabled=true
      }
    },
   
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  display: flex;
  justify-content: space-around;
}
</style>
