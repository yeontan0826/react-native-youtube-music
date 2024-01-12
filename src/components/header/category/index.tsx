import {Dispatch, SetStateAction} from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';

const CategoryHeader = ({
  headerAnim,
  selectedCategory,
  setSelectedCategory,
}: {
  headerAnim: Animated.Value;
  selectedCategory?: number;
  setSelectedCategory: Dispatch<SetStateAction<number | undefined>>;
}): JSX.Element => {
  const category = ['휴식', '에너지 충전', '집중', '운동', '출퇴근/등하교'];

  const onPressCategory = (index: number) => {
    const data = selectedCategory === index ? undefined : index;
    setSelectedCategory(data);
  };

  return (
    <View>
      <Animated.ScrollView
        style={{
          flexDirection: 'row',
          paddingVertical: 20,
          paddingBottom: 5,
          borderBottomWidth: headerAnim.interpolate({
            inputRange: [0, 40],
            outputRange: [0, 0.5],
          }),
          borderBottomColor: '#99999980',
        }}
        contentContainerStyle={{paddingHorizontal: 10}}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
        {category.map((value, index) => {
          return (
            <TouchableOpacity
              key={String(index)}
              onPress={() => onPressCategory(index)}>
              <View
                style={{
                  marginHorizontal: 4,
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                  backgroundColor:
                    selectedCategory === index ? '#ffffff' : '#ffffff10',
                  borderWidth: 0.5,
                  borderColor: '#ffffff30',
                  borderRadius: 8,
                }}>
                <Text
                  style={{
                    color: selectedCategory === index ? '#222' : 'white',
                  }}>
                  {value}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

export default CategoryHeader;
