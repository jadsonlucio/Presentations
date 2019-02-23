import os

def rename(inicio=None,fim=None,increase=None):
    for cont in range(13,27,1):
        os.rename("templates//pages_slide//"+str(cont)+".html","templates//pages_slide//"+str(cont-1)+".html")


def create_files():
    for cont in range(8,15):
        with open("templates//pages_slide//"+str(cont)+".html","w") as f:
            f.close()

rename()