export type CountProps = {
  count: number
}

// discriminated union and recommended for reducer function
export type UpdateAction = {
  type: 'increment' | 'decrement';
  payload: number
}

export type ResetAction = {
  type: 'reset'
}

export type CountActionProps = UpdateAction | ResetAction