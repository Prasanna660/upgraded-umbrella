import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFabButton,
  IonIcon,
  IonFab,
  IonFabList,
  IonPopover,
  IonLabel,
  IonInput,
  IonButton,
  IonCard,
} from '@ionic/react';
import { person, settings, qrCode } from 'ionicons/icons';
import BillsCard from '../../components/BillsCard';
import PercentageBarsCard from '../../components/PercentageBarsCard';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [connectPopover, setConnectPopover] = useState({ showPopover: false, event: undefined });
  const [settingsPopover, setSettingsPopover] = useState({ showPopover: false, event: undefined });

  const [connectFields, setConnectFields] = useState({ socialMediaAccount: '' });

  const handleButtonClick = (e: React.MouseEvent, popoverState: any, setPopoverState: React.Dispatch<React.SetStateAction<any>>) => {
    setPopoverState({ showPopover: true, event: e });
  };

  const handlePopoverDismiss = (setPopoverState: React.Dispatch<React.SetStateAction<any>>) => {
    setPopoverState({ showPopover: false, event: undefined });
  };

  const handleFieldChange = (fieldName: string, value: string, setFields: React.Dispatch<React.SetStateAction<any>>) => {
    setFields((prevValues: any) => ({ ...prevValues, [fieldName]: value }));
  };

  const handleConnectButtonClick = (setPopoverState: React.Dispatch<React.SetStateAction<any>>) => {
    // TODO: Implement logic to connect social media accounts
    console.log('Connecting social media account:', connectFields.socialMediaAccount);
    handlePopoverDismiss(setPopoverState);
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <p>
              Welcome,<br />
              <b>User Name</b>
            </p>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonFab slot="fixed" vertical="top" horizontal="end" edge={true}>
          <IonFabButton>
            <IonIcon icon={person}></IonIcon>
          </IonFabButton>
          <IonFabList side="bottom">
            <IonFabButton onClick={(e) => handleButtonClick(e, settingsPopover, setSettingsPopover)}>
              <IonIcon icon={settings}></IonIcon>
            </IonFabButton>
            {/* Additional options can be added here */}
          </IonFabList>
        </IonFab>

        <IonContent>
        {          <IonCard>
            <PercentageBarsCard />
            <BillsCard />
          </IonCard>}
          <div className="home-buttons-container">
            <div className="button-container">
              <IonFabButton onClick={(e) => handleButtonClick(e, connectPopover, setConnectPopover)}>
                <IonIcon icon={qrCode} />
              </IonFabButton>
              <div>Connect Social Media</div>
            </div>

            {/* Additional buttons for other parental control features can be added here */}
          </div>
        </IonContent>

        <IonPopover
          isOpen={connectPopover.showPopover}
          event={connectPopover.event}
          onDidDismiss={() => handlePopoverDismiss(setConnectPopover)}
        >
          {/* Connect Social Media Popover Content */}
          <IonLabel>
            Social Media Account:
            <IonInput
              value={connectFields.socialMediaAccount}
              onIonChange={(e) => handleFieldChange('socialMediaAccount', e.detail.value!, setConnectFields)}
            />
          </IonLabel>
          <IonButton expand="full" onClick={() => handleConnectButtonClick(setConnectPopover)}>Connect</IonButton>
        </IonPopover>

        {/* Additional popovers for other features can be added here */}

      </IonContent>
    </>
  );
};

export default HomePage;
