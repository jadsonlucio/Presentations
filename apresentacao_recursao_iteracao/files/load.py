import os

DEFAULT_URL_PAGE_LIST="templates/pages_slide"
DEFAULT_QUANT_FILES=25
def get_files(url=None):
    if(url==None):
        files_names=[str(cont+1)+".html" for cont in range(DEFAULT_QUANT_FILES)]
    else:
        files_names=os.listdir(url)
    return files_names

