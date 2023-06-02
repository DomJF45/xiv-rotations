import { useState } from 'react';
import { useCombobox } from 'downshift';
import { jobMap } from '../../utils/classMap';
import { BsArrowDownShort } from 'react-icons/bs'
import {
  Box, FormLabel, HStack, Image, Input, InputGroup, InputRightElement, List, ListItem, useColorModeValue, Text
} from '@chakra-ui/react';
import { iJob } from '../../utils/types';
import { ClassListComponent } from './types';

const ClassList: ClassListComponent = ({ setPlayerClass }) => {

  const [jobList, setJobList] = useState<iJob[]>(jobMap);

  const getClassFilter = (inputValue: string) => {
    const lowerCasedInputValue = inputValue.toLowerCase();

    return function jobFilter(job: iJob) {
      return (
        !inputValue || job.job.toLowerCase().includes(lowerCasedInputValue)
      )
    }
  }

  const {
    isOpen,
    setInputValue,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    getInputProps,
    highlightedIndex,
  } = useCombobox({
    items: jobList,
    onInputValueChange: ({ inputValue }) => {
      setJobList(jobMap.filter(getClassFilter(inputValue || '')));
    },
    itemToString: (item: iJob | null) => {
      return item ? item.job : ''
    },
    onSelectedItemChange: ({ selectedItem }) => setPlayerClass(selectedItem?.id || 0),
    defaultInputValue: 'Paladin'
  })

  return (
    <Box width={'auto'}>
      <Box
        width={'fit-content'}
        display={'flex'}
        flexDirection={'column'}
        gap={1}
      >
        <FormLabel
          {...getLabelProps()}
        >
        </FormLabel>
        <HStack justifyContent={'start'}>
          <InputGroup>
            <Input 
              placeholder='Class'
              width={'200px'}
              {...getInputProps()}
            />
            <InputRightElement>
              <Text 
                aria-label='clear selection'
                onClick={() => {
                  setInputValue('')
                }}
                cursor={'pointer'}
              >&#215;</Text>
              <Text
                color={'teal'}
                {...getToggleButtonProps()}
                cursor={'pointer'}
                mx={3}
              >
                <BsArrowDownShort size={20} />
              </Text>
            </InputRightElement>
          </InputGroup>
        </HStack>
      </Box>
      <List
        hidden={!isOpen || !jobList.length}
        w={'200px'}
        maxH={250}
        bg={useColorModeValue('light.bg', '#5D5D5D')}
        borderRadius={'8px'}
        shadow={'md'}
        overflowY={'scroll'}
        position={'absolute'}
        {...getMenuProps()}
      >
        {isOpen && 
          jobList.map((item, index) => {
            return (
              <ListItem 
                key={index}
                cursor={'pointer'}
                bg={highlightedIndex === index && '#ffffff20'}
                {...getItemProps({
                  item,
                  index
                })}
                py={2}
                px={3}
                display={'flex'}
              >
                <Image width={30} src={item.icon} />
                {item.job}
              </ListItem>
            )
          })
        }
      </List>
    </Box>
  )
}

export default ClassList;
