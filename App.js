import React, { Component } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Header,
  Button
  ,Linking 
} from 'react-native';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import {DataTable } from 'react-native-paper'
import { color } from 'react-native-reanimated';


const CONTENT = [
  {
    title: 'About',
    content: ' The National Institute of Business Management (NIBM) with legacy over 51 years of service in the business of higher education is focusing on resilience the professional practice gap in the fields of Management, Information Technology, Engineering, Design and Languages. Throughout this journey we have enriched thousands of students by ensuring better career opportunities in both local and foreign job markets. Concurrent innovations, developments and efforts coupled with experienced professional lead NIBM to differentiate itself from other higher education service providers.',
  },
  {
    title: 'Faculties',
    content:'School of Business | School of Computing | School of Design | School of Engineering | School of Language',
  },
  {
    title: 'Courses',
    content: '1.Master of Business Administration , 2.M.Sc. in Information Security',
  },
  {
    title: 'Collaborated Universities',
    content:'Coventry University (UK) | Limkokwing University (Malayasia) | University technology Malayasia (UTM) '   ,
  },
  {
    title: 'Events',
    content:'Aurudu Festival | Food festival | hackathon | Cricket match | Workshops | Nibm Walk',
   
    
  },
 
];



export default class App extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
         {/* <Text style={styles.line}>________________________________________________</Text> */}
         <DataTable >
         <DataTable.Row>
         <DataTable.Cell>
           <Text style={styles.mainTitle}>{section.title}   <Image  source={require('./down.png')}  />    </Text>
          </DataTable.Cell>
          {/* <DataTable.Cell>
          
          </DataTable.Cell> */}
         </DataTable.Row>
        
         </DataTable>
    
        
        
        
      </Animatable.View>
    );
  }; 

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
          <Text>{section.content}</Text>
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;

    return (
      <View style={styles.container}>
 
            
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
      
          {/* <View style={styles.multipleToggle}> */}
          <Image style={styles.img} source={require('./logo.png')}  />
                <Text  style={styles.sub}>  National Instaitute of Business Management</Text>
                <Text></Text>
          {/* </View> */}
                  
                
         
          <Collapsible collapsed={this.state.collapsed} align="center">
            <View style={styles.content}>
              
            </View>
          </Collapsible>
        
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
          <Text></Text>
          <DataTable >
            <DataTable.Row>
              <DataTable.Cell style={styles.contenetCell}>
              <Image  source={require('./phone.png')}  />
                <Text style={styles.cellText}>  Kandy – 081-5621604 | Colombo – 011-7321000</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell style={styles.contenetCell}>
              <Image  source={require('./loc.png')}  />
            <Text style={styles.cellText}>  No: 120/5, Wijerama (Vidya) Mawatha,Colombo 07, Sri Lanka.</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell style={styles.contenetCell}>
              <Image  source={require('./net.png')}  />
              <Text></Text>
              <Text style={{color: 'blue',fontStyle:'italic'}} onPress={() => Linking.openURL('http://www.nibm.lk')}>
                      www.nibm.lk
            </Text>

          </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
           
          




        </ScrollView>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498DB',
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
    
    
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
    
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'white',
    
  },
  inactive: {
    backgroundColor: '#83ccfc',
    
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
    
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
  line:{
        color:'blue',
        
        alignSelf:'center',
      },
      details:{
            color:'#3498DB',
            fontSize:20,
            alignSelf:'center',
            paddingLeft:5
          },
      img:{
        alignSelf:'center',
      },
     sub:{
       alignSelf:'center',
       color:'#e8f4fc'
      
     }  ,
     mainTitle :{
       fontSize:20,
       paddingLeft:5,
       color:'#0b72b5'
      
     }  ,
     iconCell:{
      width:40
     },
     contenetCell:{
      width:80
     },
     cellText:{
       color:'#bbe1fa',
       fontSize:11
     },
     MenuList:{
       width:'80%',

     },
    
});

//   return (

    
   
//     <View style={styles.container}>
     
//      <Image  source={require('./logo.png')}  />
      
//     <Text style={styles.sub}> National Institue of Business Management </Text>
//     <Text style={styles.line}>______________________________________________________</Text>
//     <View flexDirection='row' >
//     <Image  source={require('./about.png')}  />
//     <Text style={styles.details}> About  </Text>
//     </View>
   
//     <Text style={styles.line}>______________________________________________________</Text>
//     <View flexDirection='row'>
//     <Image  source={require('./fac.png')}  />
//     <Text style={styles.details}> Faculties</Text>
//     </View>

//     <Text style={styles.line}>______________________________________________________</Text>
//     <View flexDirection='row'>
//     <Image  source={require('./cou.png')}  />
//     <Text style={styles.details}> Courses</Text>
//     </View>
//     <Text style={styles.line}>______________________________________________________</Text>
//     <View flexDirection='row'>
//     <Image  source={require('./eve.png')}  />
//     <Text style={styles.details}> Events </Text>
//     </View>
//     <Text style={styles.line}>______________________________________________________</Text>
   
//    <Text></Text>
//    <View style={styles.footer}>
//     <View flexDirection='row'>
//     <Image  source={require('./phone.png')}  />
// 
//     </View>
//     <View flexDirection='row'>
//      <Image  source={require('./loc.png')}  />
//   
//     </View>
//     </View>
  
   
 
   
    
  
//     </View>

   

//   );





// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'silver',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image:{
//     width:20,
//     height:40
//   },
//   sub:{
    
//     fontSize:14,
//     borderBottomColor:'#3498DB',
//     borderWidth:1,
//     borderRadius:5

//   },
//   details:{
    
//     color:'#3498DB',
//     fontSize:20,

//   },
//   line:{
//     color:'green',
    
//   },
//   loc:{
   
//     fontSize:11
//   },
//   footer:{
//    alignItems:'center'
//   },
//   btn:{
//     borderWidth:1,
//     width:250,
//     height:50,
//     borderRadius:5,
//     alignContent:'center',


//   },
 
 

// });
