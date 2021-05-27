import React from 'react'
import {View,Text,StyleSheet, Button} from 'react-native'
import {CATEGORIES} from '../data/dummy-data';
const CategoriesMealsScreen = (props) => {
    let catId = props.navigation.getParam('categoryId')
    const selectedCategory=CATEGORIES.find(cat=>cat.id===catId)
    return (
        <View style={styles.screen}>
            <Text>The Categories Meals Screen!</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to Details" onPress={()=>{
                props.navigation.navigate('MealDetail')
            }}/>
            <Button title="Go Back" onPress={()=>{
                props.navigation.goBack();
            }}/>
        </View>
    )
}

CategoriesMealsScreen.navigationOptions = (navigationData)=>{ //you do this when you have to do it dynamically and not static data 
    let catId= navigationData.navigation.getParam('categoryId')
    const selectedCategory=CATEGORIES.find(cat=>cat.id===catId)
    return {
        headerTitle:selectedCategory.title,
       
    }
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default CategoriesMealsScreen
