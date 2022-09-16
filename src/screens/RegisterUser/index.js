import { useState, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import firestore from '@react-native-firebase/firestore';
// import { Container } from './styles';



const ListUser = () => {

  const [students, setStudents] = useState<any>([])

  useEffect(() => {
    const firestoreData = firestore()
      .collection('student')
      .onSnapshot(querySnapShot => {
        const data = querySnapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setStudents(data)
      })

    return () => firestoreData()

  }, [])



  // Pega uma lista de dados fixa uma vez
  // useEffect(() => {
  //   firestore()
  //     .collection('student')
  //     .get()
  //     .then(response => {
  //       const data = response.docs.map(doc => {
  //         return {
  //           id: doc.id,
  //           ...doc.data()
  //         }
  //       })
  //       setStudents(data)
  //       console.log('Return Array =>', students)
  //     })

  //     .catch(error => console.log('ERROR=>', error)
  //     )
  //   console.log('estudantes =>', students);


  // }, [])

  return (
    <FlatList
      data={students}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <View><Text>{item.name}</Text></View>}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ListUser;
