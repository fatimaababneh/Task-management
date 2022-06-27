<template>
  <div style="padding: 1em">
    <!-- <v-container fluid>
      <label>Task Management</label>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-row>
            <p>subject</p>
          </v-row>
          <v-row>
            <v-text-field label="Regular"></v-text-field>
          </v-row>
        </v-col>
        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items" filled label="Filled style" dense></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            :items="items"
            label="Outlined style"
            dense
            outlined
          ></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items" label="Solo field" dense solo></v-select>
        </v-col>
      </v-row>
    </v-container> -->
  <h2 id="title">Task Management</h2>

  <div class="container-form">

    <div class="frst-colm">
        <div >
        <div class="frst-row-col1">
            <label>Task Subject</label>
                <v-select style="width:40vh; "
                :items="items"
                filled 
                label="Filled style"
                dense
                ></v-select>
            <label>Task Description</label>
        <v-textarea class="text-1"
          filled
          auto-grow
          label="Two rows" rows="2"  row-height="20" style="width:300px"
        ></v-textarea>
        
        </div>
        <div class="scnd-row-col1">
        <label>Task Type</label>
                <v-select style="width:40vh;"
                :items="items"
                filled
                label="Filled style"
                dense
                ></v-select>
                <v-checkbox v-model="checkbox">
      <template v-slot:label>
        <div>
          I agree that
          is awesome
        </div>
      </template>
    </v-checkbox>
        <label>Asignee Name</label>
                <v-select style="width:40vh;"
                :items="items"
                filled
                label="Filled style"
                dense
                ></v-select>
        </div>
        </div>
        
    </div>

    <div class="scnd-colm">
        <div>
        <div class="frst-row-col2" style="width:600px; height:300px; padding-left:.3em;">
            <span style="font-size:large;">Priority:</span>
            <v-col style="width:600px; padding-left:2em;" >
                <v-col style="height:120px">
                    <label>Tesk Description</label>
                        <v-row justify="space-around" style="height:65px">
                            <v-checkbox v-model="checkbox" style="background:rgb(238, 236, 236); height:30px; color:black; border-radius:4px;">
                                <template v-slot:label>
                                Low
                                </template>
                            
                            </v-checkbox><v-checkbox v-model="checkbox" style="background:rgb(238, 236, 236); height:30px; color:black; border-radius:4px;" >
                                <template v-slot:label>
                                    Medium
                                </template>
                            </v-checkbox><v-checkbox v-model="checkbox" style="background-color:rgb(238, 236, 236); height:30px; color:black; border-radius:4px;">
                                <template v-slot:label>
                                    High
                                </template>
                            </v-checkbox>
                        </v-row>
                    
                        <v-textarea class="text-1"
                        filled
                        auto-grow
                        label="Two rows"
                        rows="1"  
                        row-height="10" 
                        ></v-textarea>
                </v-col>
                <v-col style="height:120px">
                <label>Tesk Description</label>
                            <v-row justify="space-around" style="height:65px">
                                <v-checkbox v-model="checkbox" style="background-color:rgb(238, 236, 236);  height:30px; color:black; border-radius:4px;">
                                    <template v-slot:label >
                                    Low
                                    </template>
                                
                                </v-checkbox><v-checkbox v-model="checkbox" style="background-color:rgb(238, 236, 236); height:30px; color:black; border-radius:4px;">
                                    <template v-slot:label>
                                        Medium
                                    </template>
                                </v-checkbox><v-checkbox v-model="checkbox" style="background-color:rgb(238, 236, 236); height:30px; color:black; border-radius:4px;">
                                    <template v-slot:label>
                                        High
                                    </template>
                                </v-checkbox>
                        </v-row>
                        <v-textarea class="text-1"
                            filled
                        
                            label="Two rows"
                            rows="1"  
                            row-height="5"
                            ></v-textarea>
                </v-col>
            </v-col>
    </div>
        <div class="scnd-row-col2">two
        
        </div>
        </div>
    </div>
  
  </div>
  
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#title{
    background-color: rgb(238, 236, 236);
    border-radius: 4px;
    padding: .2em;
}
.v-text-field{
border-radius: 10px;
border-width: 0;
// border-style:  hide;
}
.frst-colm{
display: grid;
// grid-template-rows: 200px 400px;
}
.frst-row-col1{
    height: 35vh;
}
.scnd-row-col1{
    border-top: 2px solid rgb(125, 221, 200);;
}
.scnd-row-col2{
    border-top: 2px solid rgb(125, 221, 200);
    width: 120vh;
    margin-left: 1em;
}
.container-form{
    display: grid;
    grid-template-columns: 450px 600px;

}
.scnd-colm{
    border-left: 2px solid rgb(125, 221, 200);;
    margin-left: 1em ;
    margin-top: 1em;
    height: 80vh;
}
</style>
