import { useState, useCallback } from 'react'

export default function useConfirmDialog() {
  const [dialogState, setDialogState] = useState({
    isOpen: false,
    message: '',
    onConfirm: null,
    onCancel: null,
  })

  const confirm = useCallback((message) => {
    return new Promise((resolve) => {
      setDialogState({
        isOpen: true,
        message,
        onConfirm: () => {
          setDialogState((prev) => ({ ...prev, isOpen: false }))
          resolve(true)
        },
        onCancel: () => {
          setDialogState((prev) => ({ ...prev, isOpen: false }))
          resolve(false)
        },
      })
    })
  }, [])

  const closeDialog = useCallback(() => {
    if (dialogState.onCancel) {
      dialogState.onCancel()
    } else {
      setDialogState((prev) => ({ ...prev, isOpen: false }))
    }
  }, [dialogState])

  return {
    isOpen: dialogState.isOpen,
    message: dialogState.message,
    onConfirm: dialogState.onConfirm,
    onCancel: dialogState.onCancel,
    confirm,
    closeDialog,
  }
}
