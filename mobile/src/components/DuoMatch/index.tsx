import React, { useState } from 'react';
import { Modal, ModalProps, Text, TouchableOpacity, View, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from "phosphor-react-native";

import * as Clipboard from 'expo-clipboard';

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';

interface Props extends ModalProps {
  discord: string;
  onClose(): void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {

  const [isCopping, setIsCopping] = useState(false);

  async function handleCopyDiscordToClipboard(){
    setIsCopping(true);
    await Clipboard.setStringAsync(discord);
    Alert.alert("Usuário Copiado", "Cole no seu Discord!");
    setIsCopping(false);
  }

  return (
    <Modal
      animationType="fade"
      transparent
      {...rest}
    >
      <View style={styles.container}>

        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon}>
            <MaterialIcons
              name='close'
              size={30}
              color={THEME.COLORS.CAPTION_500}
              onPress={onClose}
            />
          </TouchableOpacity>

          <CheckCircle
            weight='bold'
            size={70}
            color={THEME.COLORS.SUCCESS}
          />

          <Heading
            title="Let's play"
            subtitle='Agora é só começar a jogar!'
            style={{ alignItems: 'center', marginTop: 24 }}
          />

          <Text style={styles.label}>
            Adicione seu discord
          </Text>


          <TouchableOpacity 
          onPress={handleCopyDiscordToClipboard}
          style={styles.discordButton}
          >
            <Text style={styles.discord}>
              {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord}
            </Text>
          </TouchableOpacity>


        </View>

      </View>
    </Modal>
  );
}