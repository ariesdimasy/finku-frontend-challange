/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView
} from 'react-native';

import { Container, 
  Header, 
  Left, 
  Body, 
  Content, 
  Footer , 
  Button, 
  Title , 
  Icon, 
  Accordion, 
  FooterTab,
  List, ListItem, Thumbnail
} from "native-base"

const B = (props) => <Text style={{ fontWeight: "bold" }}>{ props.children }</Text>

const dataArray = [
  [{ 
    title: "Finku telah terdaftar secara resmi dan diawasi oleh pemerintah Indonesia", 
    content: <View>
      
      <List>
        <ListItem avatar>
          <Left>
            <Thumbnail  />
          </Left>
          <Body style={{flexDirection:"row"}}>
            <Text style={{ flexShrink:1 }}>Finku Terdaftar di bawah <B>KOMINFO</B> yang 
            memiliki SOP & pengaturan keamanan data yang ketat</Text>
          </Body>
        </ListItem>
        <ListItem avatar>
          <Left>
            <Thumbnail  />
          </Left>
          <Body style={{flexDirection:"row"}}>
            <Text style={{ flexShrink:1 }}> Finku <B>secara resmi terdaftar</B> sebagai PT</Text>
          </Body>
          
        </ListItem>
        <ListItem avatar>
          <Left>
            <Thumbnail  />
          </Left>
          <Body style={{flexDirection:"row"}}>
            <Text style={{ flexShrink:1 }}> Finku dikembangkan oleh tim dari Indonesia yang sudah mempelajari
              berbagai regulasi terkait keamanan data & privasi
            </Text>
          </Body>
          
        </ListItem>
      </List>
      
    </View>
  }],
  [{ 
    title: "Finku sangat serius & berdedikasi dalam menjaga keamanan data mu", 
    content: <View>
      <ListItem avatar>
          <Left>
            <Thumbnail  />
          </Left>
          <Body style={{flexDirection:"row"}}>
            <Text style={{ flexShrink:1 }}>Finku memanfaatkan enkripsi canggih 256-AES, sama atau lebih tinggi dari <B>rata - rata bank dan asplikasi Fintech di dunia</B></Text>
          </Body>
        </ListItem>
        <ListItem avatar>
          <Left>
            <Thumbnail  />
          </Left>
          <Body style={{flexDirection:"row"}}>
            <Text style={{ flexShrink:1 }}> Finku hanya memiliki akses baca (<B> tidak bisa mengubah dan membuat aktivitas</B>), dan hanya membaca data saldo & transaksimu </Text>
          </Body>
          
        </ListItem>
        <ListItem avatar>
          <Left>
            <Thumbnail  />
          </Left>
          <Body style={{flexDirection:"row"}}>
            <Text style={{ flexShrink:1 }}> Finku Memfasilitasi apabila kamu ingin menghapus akunmu, dan <B>datamu akan dihapus secara menyeluruh </B>
            </Text>
          </Body>
          
        </ListItem>

    </View>
  }],
  [{ 
    title: "Ketentuan privasi", 
    content: <View>
    <ListItem avatar>
        <Left>
          <Thumbnail  />
        </Left>
        <Body style={{flexDirection:"row"}}>
          <Text style={{ flexShrink:1 }}>Finku tidak pernah dan <B> tidak akan pernah menjual data </B> apapun </Text>
        </Body>
      </ListItem>
      <ListItem avatar>
        <Left>
          <Thumbnail  />
        </Left>
        <Body style={{flexDirection:"row"}}>
          <Text style={{ flexShrink:1 }}> Finku memantau bagaimana kamu berinteraksi dengan App Finku ( contoh: fitur mana yang kamu pakai dan tidak ) untuk
          keperluan <B> evaluasi dan meningkatkan kepuasan kamu </B>
          </Text>
        </Body>
        
      </ListItem>
      <ListItem avatar>
        <Left>
          <Thumbnail  />
        </Left>
        <Body style={{flexDirection:"row"}}>
          <Text style={{ flexShrink:1 }}> Finku tidak pernah dan <B>tidak akan pernah memberikan datamu </B>ke perusahaan manapun tanpa izin kamu
          </Text>
        </Body>
        
      </ListItem>
      <ListItem avatar>
        <Left>
          <Thumbnail  />
        </Left>
        <Body style={{flexDirection:"row"}}>
          <Text style={{ flexShrink:1 }}> Selengkapnya tentang ketentuan dan privasi
          </Text>
        </Body>
        
      </ListItem>

  </View> 
  }]
];

function renderHeader(item, expanded) {
  return (<View style={{
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center" ,
    backgroundColor: "#FFDBAC" }}>
  <Text style={{ fontWeight: "600" }}>
      {" "}{item.title}
    </Text>
    {expanded
      ? <Icon style={{ fontSize: 18 }} name="arrow-up" />
      : <Icon style={{ fontSize: 18 }} name="arrow-down" />}
  </View>)
}

function renderContent(item){
  return item.content
}

const App = () => {

  return (
    
      
        <Container>
          <Header style={{backgroundColor:"#FFFCF8"}}> 
            <Left>
              
              <Icon name='arrow-back'></Icon>
             
            </Left>
            <Body>
              <Title style={{ color:"black", fontWeight:"bold" }}>Tambah Akun Finansialmu</Title>
            </Body>
            
          </Header>
          <Content padder>
           
              <View style={{ flex:1, justifyContent:"center", alignItems:"center"}}>
                <Image
                  style={{width:200, height: 200}}
                  source={require("./assets/finku-maskot.jpg")}
                />
              </View>

              <View style={{ flex:1, justifyContent:"center", alignItems:"center"}}>
                <Text style={styles.textInfo}> Sebelum hubungkan akun finansialmu, baca dan pastikan </Text>
              </View>

                <Accordion 
                  key={0} 
                  style={{ marginTop:10, borderRadius:12 }}
                  dataArray={dataArray[0]}
                  expanded={[0]}
                  headerStyle={{ backgroundColor: "#FFDBAC", color:"black"}}
                  contentStyle={{ backgroundColor: "#FFF7F2", }} 
                  renderHeader={renderHeader}
                
                />
            
              
                <Accordion 
                  style={{ marginTop:10, borderRadius:12 }}
                  key={1} dataArray={dataArray[1]}
                  expanded={[0]}
                  headerStyle={{ backgroundColor: "#FFDBAC", color:"black"}}
                  contentStyle={{ backgroundColor: "#FFF7F2", }} 
                  renderHeader={renderHeader}
                
                />

                <Accordion 
                  style={{ marginTop:10, borderRadius:12 }}
                  key={2} dataArray={dataArray[2]}
                  expanded={[0]}
                  headerStyle={{ backgroundColor: "#FFDBAC", color:"black"}}
                  contentStyle={{ backgroundColor: "#FFF7F2", }} 
                  renderHeader={renderHeader}
                
                />
              
                <Button style={styles.btnBottom} full>
                  <Text style={styles.btnTextBottom}> Tambah Akun Finansialmu </Text>
                </Button>
              
          </Content>
         
          
              
           
        </Container>
      
    
  );
};

const styles = StyleSheet.create({
    textInfo:{
      marginTop:10, marginBottom:10, fontSize:18, textAlign:"center", color:"#7B7B7B"
    },
    footer:{
      backgroundColor:"white"
    },
    btnBottom:{
      marginTop:20,
      backgroundColor:"#0C6DC7",
      paddingLeft:20,
      paddingRight:20,
      paddingTop:10,
      paddingBottom:10
    },
    btnTextBottom:{
      color:"white",
      fontSize:18
    },
    footerTab:{
      backgroundColor:"#FFF"
    }
});

export default App;
