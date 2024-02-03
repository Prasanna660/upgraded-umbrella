import React, { useState } from 'react';
import { IonCard, IonCardContent, IonProgressBar, IonLabel } from '@ionic/react';
import { IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

const ParentalControlBarsCard: React.FC = () => {
  // Assume these values are provided by the parental control API
  const [abusiveContentHigh, setAbusiveContentHigh] = useState(70); // Example percentage value for high level of abusive content
  const [abusiveContentModerate, setAbusiveContentModerate] = useState(40); // Example percentage value for moderate level of abusive content
  const [abusiveContentLow, setAbusiveContentLow] = useState(10); // Example percentage value for low or no abusive content

  return (
    <IonCard>
      <IonCardContent>
        <IonCardHeader>
          <IonCardTitle>Parental Control Alerts</IonCardTitle>
          <IonCardSubtitle>Monitoring Social Media Content</IonCardSubtitle>
        </IonCardHeader>

        <IonLabel>High Level Alerts</IonLabel>
        <IonProgressBar color="danger" value={abusiveContentHigh / 100}></IonProgressBar>

        <IonLabel>Moderate Level Alerts</IonLabel>
        <IonProgressBar color="warning" value={abusiveContentModerate / 100}></IonProgressBar>

        <IonLabel>Low/No Alerts</IonLabel>
        <IonProgressBar color="success" value={abusiveContentLow / 100}></IonProgressBar>
      </IonCardContent>
    </IonCard>
  );
};

export default ParentalControlBarsCard;
