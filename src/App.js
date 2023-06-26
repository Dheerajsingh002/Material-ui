import {Typography,Button, TextField} from '@mui/material'

function App() {
  return (
    <div>
      <Typography variant="h1" component={"h1"} sx={{color:"red"}}>Dheeraj Singh</Typography>
       <Button variant="contained" color="success" sx={{margin:"30px"}}>
        Click ME
       </Button>
       <Button variant="text" disabled>
        Click ME
       </Button>
       <Button variant="outlined" onClick={()=>alert("you clicked")} size='large'>
        Click ME for action
       </Button>
       <br></br>
       {/* <input type="text" placeholder='name' /> */}
       <TextField type='text' placeholder='name' variant='standard' sx={{margin:"30px"}}/>
       <TextField type='text' placeholder='name' variant='outlined' sx={{margin:"30px"}}/>
       <TextField type='text' placeholder='name' variant='filled' sx={{margin:"30px"}}/>
    </div>
  );
}

export default App;
