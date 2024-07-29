import React , { useState , useEffect ,useRef} from 'react';
import { Text ,Picker ,View, TextInput, StyleSheet , Animated, Pressable } from 'react-native';
import TextureButton from '../../Resourses/Buttons/TextureButton';
import ShadowButton from '../../Resourses/Buttons/ShadowButton';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import withNavbar from '../Navigation/withNavbar';
import { useNavigate } from 'react-router-dom';

const TextGeneration = ({navigation}) => {
    const [open, setOpen] = useState(false);
    const [difficulty, setDifficulty] = useState('');
    const [description, setDescription] = useState('');
    const [topicEntered, setTopicEntered] = useState('');
    const [technology, setTechnology] = useState('');
    const slideAnimation = useRef(new Animated.Value(-500)).current;
    const [topicConfirmed, setTopicConfirmed] = useState(false);
    const [typingTimeout, setTypingTimeout] = useState(null);
    const [onPress, setOnPress] = useState(false);
    const navigate = useNavigate();

    const handleDifficultyChange = (value) => {
        setDifficulty(value);
    };

    const handleButtonPressed = () => {
        console.log('Button Pressed!'); // Replace with your desired action
      };
    

    const handleTopicChange = (value , technology) => {
        clearTimeout(typingTimeout);
        const timeout = setTimeout(() => {
            try {
                if (value.length < 6) {
                    setTopicConfirmed(false);
                    return;
                }
                fetchDescription(value, technology);
            } catch (error) {
                console.error('Error handling topic change:', error);
            }
        }, 5000);
        setTypingTimeout(timeout);
    };

    const topics = [
        {label : "Select Your Technology", value : "Select Your Technology"},
        { label: "AWS", value: "aws" },
        { label: "Flutter", value: "flutter" },
        { label: "Azure", value: "azure" },
        { label: "Cloud Computing", value: "cloud-computing" },
        { label: "Google Cloud", value: "google-cloud" },
        { label: "Red Hat", value: "red-hat" },
        { label: "Full-stack Development", value: "full-stack-development" },
        { label: "Gaming/Unity", value: "gaming-unity" },
        { label: "AR/VR Technology", value: "ar-vr-technology" },
        { label: "Salesforce", value: "salesforce" },
        { label: "AI", value: "ai" },
        { label: "Deep Learning", value: "deep-learning" },
        { label: "HTML", value: "html" },
        { label: "CSS", value: "css" },
        { label: "C++", value: "c++" },
    ];

  
    const fetchDescription = async (topic, technology) => {
        try {
            // Perform API request to fetch description based on topic and technology
            console.log('fetching description for topic:', topic, 'and technology:', technology);
            const response = await fetch('http://localhost:5000/api/DescriptionGeneration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ topic, technology })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setDescription(data.description);
            // // Trigger slide animation
            Animated.timing(slideAnimation, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
            }).start();
        } catch (error) {
            console.error('Error fetching description:', error);
        }
    };

    const handleTechnologyChange = (value) => {
        setTechnology(value);
        if (topicEntered) {
            fetchDescription(value);
        }
    };

    const handleTopicConfirm = (value)=> {
        setTopicConfirmed(value);
    };

    console.log(topicConfirmed);
   

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Picker
                    selectedValue={technology}
                    style={styles.input}
                    onValueChange={handleTechnologyChange}
                    required
                >
                    {topics.map((topic) => (
                        <Picker.Item key={topic.value} label={topic.label} value={topic.value} />
                    ))}
                </Picker>

                <TextInput
                    style={styles.input}
                    placeholder="Enter topic"
                    onChangeText={(topicEntered) => setTopicEntered(topicEntered)}
                    // onChange ={(topicEnteredboolean) => handleTopicConfirmboolean(topicEntered > 0)}
                    disabled={topicConfirmed}
                    required
                />
                            <View style={styles.buttonContainer}>
                                <TextureButton    
                                    buttonText="Confirm"  
                                    buttonStyle={{ backgroundColor: '#4dccc6', hoverBackgroundColor: '#89d8d3', margin: '10px' }}
                                    textStyle={{ fontSize: 12 }}
                                    onPress={() => {
                                        const enteredText = topicEntered; 
                                        handleTopicConfirm(true);
                                        handleTopicChange(enteredText, technology);
                                    }}
                                />
                                <TextureButton 
                                    buttonText="Change Topic"  
                                    buttonStyle={{ backgroundColor: '#4dccc6', hoverBackgroundColor: '#89d8d3', margin: '10px' }}
                                    textStyle={{ fontSize: 12}}
                                    onPress={() => handleTopicConfirm(false)} 
                                />
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder="Number of questions"
                                inputMode="numeric"
                                required
                            />
                            <Picker
                                selectedValue={difficulty}
                                style={styles.input}
                                onValueChange={handleDifficultyChange}
                                required
                            >
                                <Picker.Item label="Select Difficulty" value="" />
                                <Picker.Item label="Easy" value="easy" />
                                <Picker.Item label="Medium" value="medium" />
                                <Picker.Item label="Hard" value="hard" />
                            </Picker>
                            <Button
                                variant="info"
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                            >
                                Topic Description
                            </Button>
                            <Collapse in={open}>
                                <div id="example-collapse-text">
                                    <Text style={styles.descriptionTitle}>Description</Text>
                                    <View style={[styles.descriptionContainer, { height: open ? 'auto' : 0 }]}>
                                        <Text>
                                            {description}
                                        </Text>
                                    </View>
                                </div>
                            </Collapse>
            </View>
            <View style = {{flexDirection : 'row'}}>
         
            <ShadowButton
                title="Generate Questions"
                onPress={() => navigation.replace('Login')}
                disabled={ !technology || !difficulty || !topicConfirmed}
             />
        </View>
        {/*<CustomButton7 onPress={handleButtonPressed} />*/}
        
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        height: '50%',
        margin: 20,
        left: '10%',
        backdropFilter: 'blur(5px)',
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        transformStyle: 'preserve-3d',
    },

    leftContainer: {
        flex: 1,
        width: '75%',
        height: '30%',
        marginBottom: 10,
    },
    rightContainer: {
        justifyContent: 'right',
        flex: 1,
        width: '75%',
        marginTop: '40%',
    },
    input: {
        width: '100%',
        height: '10',
        marginBottom: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'left',
    },
    descriptionContainer: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#f0f0f0', // Lighter background
        borderRadius: 5,
    },
    descriptionTitle: {
        backgroundColor: '#f0f0f0', // Lighter background for title
        fontWeight: 'bold',
        marginBottom: 5,
    },
});
    

const WrappedTextScreen = withNavbar(TextGeneration);

export default WrappedTextScreen;
