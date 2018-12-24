import * as React from 'react';

interface LandingPageProps {}
interface LandingPageState {}

export class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
  public readonly state: LandingPageState = {}

  public render() {
    return (
      <div>
        Landing
      </div>
    )
  }
}
