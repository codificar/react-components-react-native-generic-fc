# react-native-generic
A generic function component to react native.

## Install
add in package.json:
```bash
"PROJECTNAME": "git+https://libs:ofImhksJ@git.codificar.com.br/react-components/PROJECTNAME.git",
```

## Usage

```javascript

import GenericFunctionComponent from "react-native-generic-fc";

<GenericComponent
	route={'localhost:8000/libs/generic/test'}
	providerId={this.state.providerId}
	token={this.state.token}
/>


```

## Properties

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| route | '' | `string` | route to API requisition|
| providerId | - | `number` | provider id |
| token | - | `string` | provider token |