import { useCallback, useState, useRef } from 'react'
import { Upload, X, File as FileIcon, Image, FileText, AlertCircle } from 'lucide-react'
import classNames from '../../utils/classNames'
import formatCurrency from '../../utils/formatCurrency'

function formatFileSize(bytes) {
  if (bytes === 0) return '0 o'
  const units = ['o', 'Ko', 'Mo', 'Go']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return `${(bytes / Math.pow(1024, i)).toFixed(i === 0 ? 0 : 1)} ${units[i]}`
}

function getFileIcon(file) {
  const type = file.type || file.mimeType || ''
  if (type.startsWith('image/')) return <Image size={20} />
  if (type.includes('pdf') || type.includes('document')) return <FileText size={20} />
  return <FileIcon size={20} />
}

export function FileUpload({
  accept,
  multiple = false,
  maxSize,
  onUpload,
  onRemove,
  files = [],
  uploading = false,
  className = '',
}) {
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState(null)
  const inputRef = useRef(null)

  const validateFile = useCallback(
    (file) => {
      if (maxSize && file.size > maxSize) {
        return `Le fichier "${file.name}" dépasse la taille maximale de ${formatFileSize(maxSize)}`
      }
      return null
    },
    [maxSize]
  )

  const handleFiles = useCallback(
    (fileList) => {
      setError(null)
      const validFiles = []

      for (const file of fileList) {
        const err = validateFile(file)
        if (err) {
          setError(err)
          continue
        }
        validFiles.push(file)
      }

      if (validFiles.length > 0) {
        onUpload?.(multiple ? validFiles : [validFiles[0]])
      }
    },
    [validateFile, onUpload, multiple]
  )

  const handleDragOver = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(false)
      if (e.dataTransfer.files?.length) {
        handleFiles(Array.from(e.dataTransfer.files))
      }
    },
    [handleFiles]
  )

  const handleInputChange = (e) => {
    if (e.target.files?.length) {
      handleFiles(Array.from(e.target.files))
    }
    e.target.value = ''
  }

  return (
    <div className={className}>
      <div
        className={classNames(
          'border-2 border-dashed rounded-box p-6 text-center transition-all cursor-pointer',
          isDragging
            ? 'border-primary bg-primary/5'
            : 'border-base-300 hover:border-primary/50 hover:bg-base-200/50',
          uploading && 'pointer-events-none opacity-60'
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !uploading && inputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            !uploading && inputRef.current?.click()
          }
        }}
        aria-label="Zone de dépôt de fichiers"
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleInputChange}
          className="hidden"
        />
        <Upload
          size={32}
          className={classNames(
            'mx-auto mb-2 transition-colors',
            isDragging ? 'text-primary' : 'text-base-content/30'
          )}
        />
        <p className="text-sm font-medium">
          {isDragging ? 'Déposez vos fichiers ici' : 'Glissez vos fichiers ici ou cliquez pour parcourir'}
        </p>
        {accept && (
          <p className="text-xs text-base-content/40 mt-1">
            Formats acceptés: {accept}
          </p>
        )}
        {maxSize && (
          <p className="text-xs text-base-content/40">
            Taille maximale: {formatFileSize(maxSize)}
          </p>
        )}
      </div>

      {error && (
        <div className="alert alert-error mt-3 py-2 px-3 text-sm">
          <AlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}

      {files.length > 0 && (
        <div className="mt-3 space-y-2">
          {files.map((file, index) => {
            const fileObj = file instanceof File ? file : null
            const fileName = file.name || fileObj?.name || 'Fichier'
            const fileSize = file.size || fileObj?.size
            const filePreview = file.preview || file.url

            return (
              <div
                key={file.id || index}
                className="flex items-center gap-3 p-3 bg-base-200 rounded-box"
              >
                {filePreview && file.type?.startsWith('image/') ? (
                  <div className="w-10 h-10 rounded overflow-hidden bg-base-300 shrink-0">
                    <img
                      src={filePreview}
                      alt={fileName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded bg-base-300 flex items-center justify-center shrink-0 text-base-content/50">
                    {getFileIcon(file)}
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{fileName}</p>
                  {fileSize && (
                    <p className="text-xs text-base-content/40">{formatFileSize(fileSize)}</p>
                  )}
                  {file.progress !== undefined && (
                    <progress
                      className="progress progress-primary w-full mt-1"
                      value={file.progress}
                      max="100"
                    />
                  )}
                </div>

                {onRemove && (
                  <button
                    className="btn btn-ghost btn-circle btn-sm text-error shrink-0"
                    onClick={() => onRemove(file.id || file)}
                    disabled={uploading}
                    aria-label={`Supprimer ${fileName}`}
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default FileUpload
